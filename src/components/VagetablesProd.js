import React from "react";

export default function VagetablesProd() {
  const products = [
    {
      name: "Moringa Hot Drink",
      details:
        "Method of Hot Drink preparation: Boil a little over one cup of water in the kettle. Put two spoons of Moringa   Leaf into boiling water. There is a measuring spoon in the   pot. Then boil the Leaf for a further 2.5 to 3 minutes and  take it off the stove for straining. You can add honey  ins Hot Drink of sugar to enhance the taste.",
      ingrediant: "Moringa Leaf",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Moringa Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
    },
    {
      name: "Sojina Fat Burner Hot Drink",
      details:
        "Method of Hot Drink’ preparation: Boil a little over one cup of water in the kettle. Put two spoons of `Fat   Burner Hot Drink’ into boiling water. There is a  measuring spoon in the pot. Then boil the `Hot Drink’ for a further 2.5 to 3 minutes and take it off the stove for straining. You can add honey ins`Hot Drink’d of sugar to  enhance the taste.",
      ingrediant: "Moringa leaf and other natural herbal ingredients",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
      precaution:
        "Drinking one cup of `Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
    },
    {
      name: "Sojina DiaLeaf Hot Drink",
      details:
        "Method of `Hot Drink’ preparation: Boil a little over one cup of water in the kettle. Put two spoons of `Sojina  DiaLeaf Hot Drink’ into boiling water. There is a  measuring spoon in the pot. Then boil the `Hot Drink’ for  a further 2.5 to 3 minutes and take it off the stove for straining. You can add honey ins`Hot Drink’d of sugar to  enhance the taste.",
      ingrediant: "Natural herbal ingredients",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
    },
    {
      name: "Sojina  ImmuneBloom  Hot drink  Moringa Care   for Immune  Boosting",
      details:
        "Method of `Hot Drink’ preparation: Boil a little over one cup of water in the kettle. Put two spoons of `ImmuneBloom Hot drink’ into boiling water. There is a   measuring spoon in the pot. Then boil the `Hot Drink’ for a further 2.5 to 3 minutes and take it off the stove for  straining. You can add honey ins`Hot Drink’d of sugar to  enhance the taste.",
      ingrediant: "Natural herbal ingredients",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
    },
    {
      name: "Sojina   Powder   (Moringa leaf powder)",
      details:
        "Moringa leaf powder can be used to make soups,  smoothies, as well as adding moringa leaf powder to any food of choice while cooking. Again it is possible to drink only by mixing it with water.",
      ingrediant: "Moringa Leaf",
    },
    {
      name: "Sojina  Golden Glow Hot drink",
      details: "One or two tablets should be taken twice a day",
      ingrediant: "(Turmeric, Moringa & other herbs Golden Botanic Blend)",
    },
    {
      name: "Sajina Uptan",
      details:
        "Uptan can be used to treat any skin type, whether oily,  normal or combination. First mix uptan with water to  make a thick paste, then gently massage the uptan on  the skin for a while and wait for it to dry. After that, you should massage gently while cleaning with water.",
      ingrediant:
        "Moringa Seed Cake, Turmeric, and other natural herbal ingredients",
    },
    {
      name: "Sojina  Magic Oil (Moringa Seed  Oil)",
      details:
        "For best results, use this oil before sleeping at night or  before applying sunscreen in the morning. Moringa oil  can be used directly for dry lips and other rough, dry skin  conditions such as dermatitis, eczema, acne and psoriasis conditions",
      ingrediant: "Moringa Seed",
    },
  ];
  return (
    <div className="my-10 p-10 container mx-auto">
      <h2 className="text-3xl font-semibold">
        <span className="text-[#71B002]">{products?.length} Vagetables</span>{" "}
        Products
      </h2>
      <div className="my-10">
        {products?.map((p, i) => (
          <div
            key={i}
            className="relative grid gap-4 md:grid-cols-2 shadow-xl rounded-xl mt-5 p-5"
          >
            <div>
              <p>
                <span className="font-semibold">Name:</span> <br /> {p?.name}
              </p>

              <p>
                <span className="font-semibold">Ingrediant:</span> <br />{" "}
                {p?.ingrediant}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Details:</span> <br />{" "}
                {p?.details}
              </p>
              {p?.special && (
                <p>
                  <span className="font-semibold">Speciality:</span> <br />{" "}
                  {p?.special}
                </p>
              )}
              {p?.rule && (
                <p>
                  <span className="font-semibold">Rule:</span> <br /> {p?.rule}
                </p>
              )}
              {p?.precaution && (
                <p>
                  <span className="font-semibold">Precaution:</span> <br />{" "}
                  {p?.precaution}
                </p>
              )}
            </div>
            <p className="absolute -right-5 -top-5 text-3xl font-semibold px-4 py-2 bg-green-500 text-white rounded-xl">
              {i + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
