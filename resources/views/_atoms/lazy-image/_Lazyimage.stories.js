import tpl from "./_ui.html";

export default {
  title: "Atoms/Lazy Image",
};

export const LazyImage = () => {
  return `
    <div class="max-w-6.5xl px-4 mx-auto mb-12 lg:px-8">
      <p class="mb-5 text-5xl font-bold">Example Lazy Load Image</p>
      ${tpl}
    </div>
  `;
};
