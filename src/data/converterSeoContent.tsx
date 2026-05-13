import React from "react";

export interface ConverterSEO {
  intro: string;
  formula: React.ReactNode;
  howToUse: React.ReactNode;
  useCases: React.ReactNode;
  faqs: { q: string; a: string }[];
  related: { id: string; name: string }[];
}

export const getConverterSEOContent = (id: string, name: string): ConverterSEO => {
  const defaultRelated = [
    { id: "length-converter", name: "Length Converter" },
    { id: "mass-converter", name: "Mass Converter" },
    { id: "temperature-converter", name: "Temperature Converter" },
  ]
    .filter((item) => item.id !== id)
    .slice(0, 3);

  const baseSEO: ConverterSEO = {
    intro: `The Mathiq ${name} provides fast and accurate conversions with a modern, easy-to-use interface. Whether you're working on a project, studying, or just need a quick conversion, Mathiq makes it effortless.`,
    formula: (
      <p>
        This converter uses exact mathematical conversion factors to seamlessly switch between units, guaranteeing maximum accuracy.
      </p>
    ),
    howToUse: (
      <ul className="list-decimal pl-5 space-y-2 text-zinc-300">
        <li>Select the unit you want to convert from using the beautifully designed dropdowns.</li>
        <li>Enter your numerical value in the input field.</li>
        <li>Instantly view the converted result in your desired target unit.</li>
        <li>Use the swap button to quickly reverse the conversion direction.</li>
      </ul>
    ),
    useCases: (
      <p>
        Use this tool for academic computations, engineering projects, daily reference, or professional documentation where precise conversions are necessary.
      </p>
    ),
    faqs: [
      {
        q: `Is the Mathiq ${name} completely free?`,
        a: "Yes! Mathiq provides premium smart conversion tools entirely for free with no account required.",
      },
      {
        q: "Are the conversion numbers accurate?",
        a: "All conversions use precise, high-fidelity factors based on international standard units.",
      },
      {
        q: "Does this work on mobile?",
        a: "Mathiq is fully responsive and feels like a native app on mobile devices for quick on-the-go conversions.",
      },
    ],
    related: defaultRelated,
  };

  switch (id) {
    case "length-converter":
      return {
        ...baseSEO,
        formula: (
          <div>
            <p className="mb-2">Length conversion relies on consistent multiplication factors. For example:</p>
            <code className="block bg-[#1a1a24] p-4 rounded-xl text-orange-400 font-mono text-sm shadow-inner mb-4">
              1 Meter = 100 Centimeters<br />
              1 Mile = 1.60934 Kilometers<br />
              1 Inch = 2.54 Centimeters
            </code>
          </div>
        ),
      };
    // Others can be filled out with specific SEO as the ecosystem scales
    default:
      return baseSEO;
  }
};
