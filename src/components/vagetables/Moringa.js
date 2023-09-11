import React from "react";
import img from "../../img/Picture.png";
import img2 from "../../img/Picture2.png";
import moringa1 from "../../img/moringa (1).webp";
import moringa2 from "../../img/moringa (1).jpg";
import moringa3 from "../../img/moringa (2).jpg";
import moringa4 from "../../img/moringa (3).jpg";

export default function Moringa() {
  const products = [
    {
      name: "Moringa Hot Drink",
      details:
        "Method of Hot Drink preparation: Boil a little over one cup of water in the kettle. Put two spoons of Moringa   Leaf into boiling water. There is a measuring spoon in the   pot. Then boil the Leaf for a further 2.5 to 3 minutes and  take it off the stove for straining. You can add honey  ins Hot Drink of sugar to enhance the taste.",
      ingrediant: "Moringa Leaf",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Moringa Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
      img: moringa2,
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
      img: moringa3,
    },
    {
      name: "Sojina DiaLeaf Hot Drink",
      details:
        "Method of `Hot Drink’ preparation: Boil a little over one cup of water in the kettle. Put two spoons of `Sojina  DiaLeaf Hot Drink’ into boiling water. There is a  measuring spoon in the pot. Then boil the `Hot Drink’ for  a further 2.5 to 3 minutes and take it off the stove for straining. You can add honey ins`Hot Drink’d of sugar to  enhance the taste.",
      ingrediant: "Natural herbal ingredients",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
      img: moringa4,
    },
    {
      name: "Sojina  ImmuneBloom  Hot drink  Moringa Care   for Immune  Boosting",
      details:
        "Method of `Hot Drink’ preparation: Boil a little over one cup of water in the kettle. Put two spoons of `ImmuneBloom Hot drink’ into boiling water. There is a   measuring spoon in the pot. Then boil the `Hot Drink’ for a further 2.5 to 3 minutes and take it off the stove for  straining. You can add honey ins`Hot Drink’d of sugar to  enhance the taste.",
      ingrediant: "Natural herbal ingredients",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
      img: moringa2,
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
  const nutrients = [
    {
      Nutrients: "Moisture",
      DriedLeaves: "7.50% ",
      LeavesPowder: "7.50%",
    },
    {
      Nutrients: "Calories",
      DriedLeaves: "329K cal ",
      LeavesPowder: "205K cal",
    },
    {
      Nutrients: "Fiber",
      DriedLeaves: "12.5g",
      LeavesPowder: "19.2g",
    },
    {
      Nutrients: "Protein",
      DriedLeaves: "29.4g",
      LeavesPowder: "27.1g",
    },
    {
      Nutrients: "Fat",
      DriedLeaves: "5.2g",
      LeavesPowder: "2.3g",
    },
    {
      Nutrients: "Starch",
      DriedLeaves: "41.2g",
      LeavesPowder: "38.2g",
    },
    {
      Nutrients: "Calcium",
      DriedLeaves: "2185mg",
      LeavesPowder: "2003mg",
    },
    {
      Nutrients: "Iron",
      DriedLeaves: "25.6mg",
      LeavesPowder: "28.2mg",
    },
    {
      Nutrients: "Potassium",
      DriedLeaves: "1236mg",
      LeavesPowder: "1324mg",
    },
    {
      Nutrients: "Magnesium",
      DriedLeaves: "448mg",
      LeavesPowder: "368mg",
    },
    {
      Nutrients: "Phosphorus",
      DriedLeaves: "252mg",
      LeavesPowder: "204mg",
    },
    {
      Nutrients: "Vitamin A",
      DriedLeaves: "18.9mg ",
      LeavesPowder: "18.9mg",
    },
    {
      Nutrients: "Vitamin B1",
      DriedLeaves: "2.02mg ",
      LeavesPowder: "2.64mg",
    },
    {
      Nutrients: "Vitamin B2",
      DriedLeaves: "21.3mg ",
      LeavesPowder: "20.5mg",
    },
    {
      Nutrients: "Vitamin B3 Niacin",
      DriedLeaves: "7.6mg",
      LeavesPowder: "8.2mg",
    },
    {
      Nutrients: "Vitamin C",
      DriedLeaves: "15.8mg",
      LeavesPowder: "17.3mg",
    },
    {
      Nutrients: "Vitamin E",
      DriedLeaves: "10.8mg",
      LeavesPowder: "113mg",
    },
    {
      Nutrients: "Zinc",
      DriedLeaves: "3.29mg",
      LeavesPowder: "3.57mg",
    },
    {
      Nutrients: "Copper",
      DriedLeaves: "0.49mg",
      LeavesPowder: "0.57mg",
    },
  ];
  return (
    <div className="p-10 container mx-auto">
      <div>
        <img src={moringa1} alt="" />
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mt-10 uppercase">
          <span className="text-[#71B002]">{products?.length} Moringa</span>{" "}
          Products
        </h2>
        {products?.map((p, i) => (
          <div
            key={i}
            className="relative grid gap-4 md:grid-cols-2 shadow-xl rounded-xl mt-5 p-5"
          >
            <div className="flex flex-col gap-4">
              {p.img && (
                <img
                  src={p.img}
                  alt="product_img"
                  className="rounded-xl h-[150px] w-[150px]"
                />
              )}
              <p>
                <span className="font-semibold">Name:</span> <br /> {p?.name}
              </p>

              <p>
                <span className="font-semibold">Ingrediant:</span> <br />{" "}
                {p?.ingrediant}
              </p>
            </div>
            <div className="flex flex-col gap-4">
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
            <p className="absolute -right-5 -top-5 text-3xl font-semibold px-4 py-2 bg-[#71B002] text-white rounded-xl">
              {i + 1}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <h2 className="text-xl font-semibold text-[#71B002]">
          Discover the Essence of Wellness with Home Grow
        </h2>
        <h5 className="font-semibold bg-[#71B002] p-2 text-white">
          Unveiling Nature's Bounty: Moringa Powder and Moringa-Based Products
        </h5>
        <p>
          {" "}
          At Home Grow , our commitment to quality and well-being is evident in
          every step of our journey – from cultivation to packaging. Immerse
          yourself in the world of premium Moringa products, crafted with care
          for your health and happiness.
        </p>
        <h5 className="font-semibold bg-[#71B002] p-2 text-white">
          Meticulous Moringa Leaf Quality
        </h5>
        <p>
          {" "}
          <span className="font-semibold">Origin and Source:</span> Our Moringa
          leaves hail from carefully selected geographic regions known for their
          optimal climate conditions. Local farmers collaborate to cultivate
          every leaf with respect for the environment.
        </p>
        <p>
          {" "}
          <span className="font-semibold">
            Sustainable Cultivation Practices:
          </span>{" "}
          Embracing sustainable and organic farming, we prioritize soil health
          and avoid pesticides. Our approach yields leaves of unparalleled
          quality while nurturing our ecosystem.
        </p>
        <p>
          {" "}
          <span className="font-semibold">
            Leaf Selection with Precision:
          </span>{" "}
          Each leaf undergoes rigorous selection, ensuring only the freshest,
          vibrant, and unblemished ones are chosen. This preserves the essence
          of Moringa's nutritional value.
        </p>
        <p>
          {" "}
          <span className="font-semibold">Harvesting at its Peak:</span> Our
          leaves are meticulously hand-picked to ensure peak freshness and
          nutritional richness. This hands-on approach maintains the essence of
          Moringa's benefits.
        </p>
        <p>
          {" "}
          <span className="font-semibold">
            Meticulous Cleaning and Washing:
          </span>{" "}
          Before processing, our leaves are cleaned and washed meticulously to
          remove impurities. This ensures the final product is pure and free
          from unwanted elements.
        </p>
        <p>
          {" "}
          <span className="font-semibold">Optimized Drying Technique:</span> We
          use methods specially designed to preserve nutritional content, from
          sun-drying to proprietary techniques. Our Moringa leaves retain their
          potency and benefits.
        </p>
        <h5 className="font-semibold bg-[#71B002] p-2 text-white">
          Elevating Moringa Leaf Powder Quality:
        </h5>
        <p>
          {" "}
          <span className="font-semibold">Processing Perfection:</span> The
          transformation from leaves to powder is a journey of precision. Leaves
          are dried to perfection, resulting in finely textured Moringa leaf
          powder.
        </p>
        <p>
          {" "}
          <span className="font-semibold">Nutritional Richness:</span> Our
          Moringa leaf powder boasts an exceptional nutritional profile,
          abundant in essential vitamins, minerals, antioxidants, and bioactive
          compounds. Embrace the power of nature's nourishment.
        </p>
        <p>
          {" "}
          <span className="font-semibold">Nature's Signature:</span> Color,
          Aroma, and Flavor: Experience the vibrancy of our Moringa leaf powder
          – from its lively green hue to its fresh aroma and mild flavor. It's a
          testament to nature's authenticity.
        </p>
        <p>
          {" "}
          <span className="font-semibold">Nature's Signature:</span> Color,
          Aroma, and Flavor: Experience the vibrancy of our Moringa leaf powder
          – from its lively green hue to its fresh aroma and mild flavor. It's a
          testament to nature's authenticity.
        </p>
        <h5 className="font-semibold bg-[#71B002] p-2 text-white">
          Quality beyond Compromise:
        </h5>
        <p>
          {" "}
          <span className="font-semibold">
            Assured Quality and Testing:
          </span>{" "}
          Throughout production, our Moringa leaf powder undergoes rigorous
          quality testing.
        </p>
        <p>
          {" "}
          <span className="font-semibold">
            Certifications and Compliance:
          </span>{" "}
          Our Moringa leaf powder is tested and certified by BCSIR Laboratories,
          Dhaka. The process of Good Agricultural Practice (GAP) certification
          for the entire journey is underway.
          <br />
          Elevate your well-being with Home Grow – where quality, purity, and
          nature's essence converge.
        </p>
      </div>
      <div>
        <div className="lg:flex gap-5">
          <div>
            <h2 className="text-xl font-semibold mt-10">
              Nutritional Value in every{" "}
              <span className="text-[#71B002]">100 grams</span> of Moringa Leaf
              and Leaf Powder:
            </h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full mt-10">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Nutrients</th>
                    <th>Dried Leaves</th>
                    <th>Leaves Powder</th>
                  </tr>
                </thead>
                <tbody>
                  {nutrients.map((n, i) => (
                    <tr>
                      <th>{i + 1}</th>
                      <td>{n.Nutrients}</td>
                      <td>{n.DriedLeaves}</td>
                      <td>{n.LeavesPowder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-10 text-center">
              Source: Moringa oleifera: A review on nutritive importance and its
              medicinal application: sciencedirect.com
            </p>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold mt-10 uppercase">
              Our documents:
            </h2>
            <div className="flex gap-5 mt-10 overflow-x-scroll">
              <img src={img} alt="" />
              <img src={img2} alt="" />
            </div>
            <p className="mt-5 text-center font-semibold">
              Scroll left or Right
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
