/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_kQPa56tw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { $ as $$Layout } from './_id__fppm_0ko.mjs';

const LocalCart = () => {
  const cart = typeof window !== "undefined" && localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "{}") : [];
  const total = cart?.reduce(
    (amount, item) => item.price + amount,
    0
  );
  return /* @__PURE__ */ jsxs("div", { className: "py-20 text-text lg:w-auth mx-auto w-full", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold  mb-10", children: [
      "Your shopping cart (",
      cart.length,
      ")"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 bg-background1 p-20", children: [
      cart.map((item, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex justify-between items-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs("p", { className: "font-semibold text-xl", children: [
                item.name,
                " × ",
                item.quantity
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: item.attributes?.map(
                (attr, index2) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "even:after:content-['\\00a0-'] even:before:content-['-\\00a0']",
                    children: attr.value
                  },
                  index2
                )
              ) })
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "$",
              item.price * item.quantity
            ] })
          ]
        },
        index
      )),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center border-t-2 border-text pt-4", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-xl", children: "Total" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "$",
          total
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/checkout",
          className: "bg-text text-primary p-3 mt-10 rounded font-semibold text-center",
          children: "Checkout"
        }
      )
    ] })
  ] });
};

const $$Astro = createAstro("https://dounut-astro.vercel.app");
const $$Cart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cart;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cart", "description": "Dounut | Cart" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:container mx-auto w-full lg:px-0 px-5"> ${renderComponent($$result2, "LocalCart", LocalCart, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/HP/Downloads/dounut-astro-main/01_skincare/src/components/local-cart.tsx", "client:component-export": "LocalCart" })} </div> ` })}`;
}, "C:/Users/HP/Downloads/dounut-astro-main/01_skincare/src/pages/cart.astro", void 0);

const $$file = "C:/Users/HP/Downloads/dounut-astro-main/01_skincare/src/pages/cart.astro";
const $$url = "/cart";

export { $$Cart as default, $$file as file, $$url as url };
