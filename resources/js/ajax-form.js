import axios from "axios";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".ajax-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const formData = new FormData(form);
      formData.append("referer", window.location.href);

      const formHandle = form.getAttribute("data-handle");

      // set submitting state
      form.classList.add("state-submitting");

      axios
        .post(form.action, formData)
        .then(response => {
          const data = response.data;

          if (data.success) {
            // clear all errors
            form.querySelectorAll("fieldset").forEach(f => f.classList.remove("state-has-error"));
            form.classList.remove("state-error");

            // MARKETING STUFF
            if (window.dataLayer) {
              window.dataLayer.push({
                event: "generate_lead",
                form_name: data.event_label,
                event_category: data.event_category,
                event_action: data.event_action,
              });

              window.dataLayer.push({
                event: "code_event",
                form_name: data.event_label,
                event_category: data.event_category,
                event_action: data.event_action,
              });
            }

            // FORM FEEDBACK
            if (data.redirect) {
              // set redirect
              window.location.replace(data.redirect);
            } else {
              // set thanks message
              const thanks_message = document.createElement("div");
              thanks_message.innerHTML = data.success_message || "Bedankt voor je inzending.";
              thanks_message.classList.add("thanks-message", "p-2");
              thanks_message.setAttribute("data-handle", formHandle);
              form.replaceWith(thanks_message);

              // scroll thanks_message into view
              window.scrollTo({
                top: window.scrollY + thanks_message.getBoundingClientRect().top - document.querySelector("#top").clientHeight - 32,
                left: 0,
                behavior: "smooth",
              });
            }
          }
        })
        .catch(err => {
          // console.log(err);
          const status = err.response.status;

          form.classList.add("state-error");

          if (status === 400) {
            const error = err.response.data.error;

            // clear all errors at first
            form.querySelectorAll("fieldset").forEach(f => f.classList.remove("state-has-error"));

            // set current errors
            for (var pair of Object.entries(error)) {
              const field_handle = pair[0];
              const field_error_message = pair[1];
              const full_handle = formHandle + "_" + field_handle;
              const element = document.querySelector("#" + full_handle);

              if (element) {
                element.classList.add("state-has-error");

                const errorContainer = element.querySelector("p.error-feedback");

                if (errorContainer) {
                  errorContainer.innerText = field_error_message;
                }
              }
            }

            // set error state
            form.querySelector(".form-invalid-feedback").innerHTML = err.response.data.errors.map(e => `<p class="mb-2 last:mb-0">${e}</p>`).join("");
          } else {
            form.querySelector(".form-invalid-feedback").innerHTML = err.response.status + " " + err.response.statusText;
          }
        })
        .finally(() => {
          // clear submitting state
          form.classList.remove("state-submitting");
        });
    });
  });
});
