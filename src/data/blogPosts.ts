export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: Author;
  featuredImage: string;
  relatedCalculators: { name: string; url: string }[];
  faqs: { question: string; answer: string }[];
}

export const authors: Record<string, Author> = {
  alex: {
    id: "alex",
    name: "Alex Sterling",
    role: "Senior Financial Analyst",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150",
    bio: "Alex has over 10 years of experience in personal finance and corporate accounting, helping thousands simplify their financial planning.",
  },
  sarah: {
    id: "sarah",
    name: "Dr. Sarah Chen",
    role: "Health & Wellness Expert",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150",
    bio: "Sarah is a certified nutritionist and fitness coach dedicated to making health metrics easy to understand.",
  },
  marcus: {
    id: "marcus",
    name: "Marcus Devlin",
    role: "Lead Software Engineer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    bio: "Marcus loves breaking down complex algorithms and developer tools into simple, actionable guides.",
  }
};

export const blogCategories = [
  "Finance Guides",
  "Health & Fitness",
  "Education & Study",
  "Productivity",
  "Developer Tools",
  "Math & Formulas",
  "Smart Calculations"
];

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "how-emi-calculators-work",
    title: "How EMI Calculators Work: A Complete Guide",
    excerpt: "Understand the mathematics behind Equated Monthly Installments. Learn how banks calculate your loan repayments and how you can save on interest.",
    category: "Finance Guides",
    readTime: "6 min read",
    date: "2023-11-15",
    author: authors.alex,
    featuredImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    relatedCalculators: [
      { name: "EMI Calculator", url: "/calculators/emi" },
      { name: "Loan Calculator", url: "/calculators/loan" },
      { name: "Investment ROI", url: "/calculators/investment-roi" }
    ],
    faqs: [
      { question: "What does EMI stand for?", answer: "EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month." },
      { question: "Does EMI change during the loan tenure?", answer: "For fixed-rate loans, the EMI remains constant throughout the tenure. For floating-rate loans, the EMI may change if the interest rate changes." },
      { question: "How can I reduce my EMI burden?", answer: "You can reduce your EMI by making a larger down payment, opting for a longer loan tenure, or negotiating a lower interest rate." }
    ],
    content: `
Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. Equated monthly installments are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.

## Understanding the Components of EMI

Your EMI consists of two main components:
1. **Principal Repayment**: The amount that goes towards reducing your actual loan amount.
2. **Interest Payment**: The cost of borrowing the money.

In the initial years of your loan, a larger portion of your EMI goes towards paying the interest, while a smaller portion reduces the principal. As the tenure progresses, this ratio reverses.

## The Mathematical Formula

The formula used by banks and financial institutions to calculate the EMI is:

<FormulaBlock 
  title="Standard EMI Formula"
  formula="E = P x [ r(1 + r)^n ] / [ (1 + r)^n - 1 ]"
  variables={[
    { name: "E", desc: "Equated Monthly Installment (EMI)" },
    { name: "P", desc: "Principal Loan Amount" },
    { name: "r", desc: "Monthly Interest Rate (Annual Rate / 12 / 100)" },
    { name: "n", desc: "Loan Tenure in Months" }
  ]}
  example="For a loan of $10,000 at 10% annual interest for 2 years (24 months): r = 10 / 12 / 100 = 0.00833. E = 10000 * 0.00833 * (1 + 0.00833)^24 / ((1 + 0.00833)^24 - 1) ≈ $461.45"
/>

## Why Use an EMI Calculator?

While the formula is straightforward for computers, calculating it manually for different scenarios is tedious. This is where an EMI calculator becomes an invaluable tool for financial planning.

Benefits of using an EMI Calculator:
- **Instant Results**: Get accurate calculations in milliseconds.
- **Scenario Planning**: Easily adjust the principal, tenure, or interest rate to see how it affects your monthly payment.
- **Amortization Schedule**: Most calculators provide a complete breakdown of principal and interest over the loan tenure.

<CalculatorEmbed id="emi" />

## Typical EMI Examples

Let's look at how changing the tenure affects your EMI and total interest paid for a **$50,000** loan at **8% per annum**.

*   **5-Year Tenure**: EMI is **$1,013**. Total Interest Paid: **$10,829**.
*   **10-Year Tenure**: EMI is **$606**. Total Interest Paid: **$22,797**.
*   **15-Year Tenure**: EMI is **$477**. Total Interest Paid: **$36,009**.

Notice how a longer tenure significantly reduces your monthly burden but drastically increases the total amount of interest you pay over the life of the loan.

## Conclusion

Understanding how EMIs are calculated is the first step towards smart financial planning. Whether you're buying a house, a car, or taking a personal loan, knowing the math behind your payments empowers you to make better borrowing decisions.
    `
  },
  {
    id: "post-2",
    slug: "what-is-a-healthy-bmi",
    title: "What is a Healthy BMI? Formulas & Health Ranges",
    excerpt: "Discover what BMI means, how to calculate it accurately, and understand the limitations of Body Mass Index in modern health science.",
    category: "Health & Fitness",
    readTime: "5 min read",
    date: "2023-12-02",
    author: authors.sarah,
    featuredImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000",
    relatedCalculators: [
      { name: "BMI Calculator", url: "/calculators/bmi" }
    ],
    faqs: [
      { question: "Is BMI accurate for athletes?", answer: "BMI can be misleading for athletes because it doesn't distinguish between muscle and fat. Highly muscular individuals might fall into the 'overweight' category despite having low body fat." },
      { question: "Do BMI ranges differ for men and women?", answer: "The standard adult BMI ranges do not differ between men and women, though women typically have slightly more body fat than men at the same BMI." }
    ],
    content: `
Body Mass Index (BMI) is a widely used screening tool to categorize an individual's weight in relation to their height. While it doesn't measure body fat directly, it serves as an inexpensive and easy-to-perform method of screening for weight categories that may lead to health problems.

## How to Calculate BMI

The BMI formula is simple and requires only your height and weight.

<FormulaBlock 
  title="Metric BMI Formula"
  formula="BMI = Weight (kg) / [Height (m)]^2"
  variables={[
    { name: "Weight", desc: "Body weight in kilograms" },
    { name: "Height", desc: "Height in meters" }
  ]}
  example="For a person weighing 70kg with a height of 1.75m: BMI = 70 / (1.75 * 1.75) = 22.86"
/>

<FormulaBlock 
  title="Imperial BMI Formula"
  formula="BMI = 703 × Weight (lbs) / [Height (in)]^2"
  variables={[
    { name: "Weight", desc: "Body weight in pounds" },
    { name: "Height", desc: "Height in inches" }
  ]}
  example="For a person weighing 150 lbs with a height of 65 inches: BMI = 703 * 150 / (65 * 65) = 24.96"
/>

## Standard BMI Categories

According to the World Health Organization (WHO), the standard BMI categories for adults are:

- **Underweight**: Below 18.5
- **Normal weight**: 18.5 – 24.9
- **Overweight**: 25.0 – 29.9
- **Obesity**: 30.0 and above

<CalculatorEmbed id="bmi" />

## Limitations of BMI

While useful as a general guide, BMI has significant limitations:

1.  **Muscle vs. Fat**: It cannot distinguish between muscle mass, bone density, and body fat. A bodybuilder may have a BMI of 30 (Obese) but have very low body fat.
2.  **Fat Distribution**: It doesn't indicate where fat is located on the body. Visceral fat (around organs) is much more dangerous than subcutaneous fat (under the skin).
3.  **Age and Sex Limitations**: As people age, they tend to lose muscle and lean tissue, meaning BMI may underestimate body fat in the elderly.

## Beyond BMI: Better Health Metrics

For a more comprehensive view of your health, consider tracking:
- Waist Circumference
- Body Fat Percentage
- Resting Heart Rate
- Blood Pressure

Always consult a healthcare professional. BMI is a starting point, not a diagnosis.
    `
  },
  {
    id: "post-3",
    slug: "binary-vs-decimal-number-systems",
    title: "Binary vs Decimal: Complete Developer Guide",
    excerpt: "A deep dive into numeral systems. Learn how computers process data using base-2 and how to easily convert between bases.",
    category: "Developer Tools",
    readTime: "8 min read",
    date: "2024-01-10",
    author: authors.marcus,
    featuredImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    relatedCalculators: [
      { name: "Numeral System Converter", url: "/converters/numeral-system-converter" },
      { name: "Data Converter", url: "/converters/data-converter" }
    ],
    faqs: [
      { question: "Why do computers use binary?", answer: "Computers use binary because the hardware represents data using electrical signals that have two states: on (1) or off (0). It's the most reliable way to process and store information at a hardware level." },
      { question: "What is Base-16 (Hexadecimal)?", answer: "Hexadecimal uses 16 symbols (0-9 and A-F). It is commonly used in computing as a human-friendly way to represent binary chunks, where one hex digit represents exactly four binary digits (a nibble)." }
    ],
    content: `
We use the decimal system every day, likely because humans have ten fingers. But computers don't have fingers; they have transistors. A transistor essentially operates as a switch with two states: **ON** or **OFF**. This fundamental hardware reality is why computers 'think' in Binary.

## What is the Decimal System (Base-10)?

The decimal system uses 10 unique digits (0 through 9). The position of each digit represents a power of 10.

*Example: 5,423*
*   3 is in the 1s column (10^0)
*   2 is in the 10s column (10^1)
*   4 is in the 100s column (10^2)
*   5 is in the 1000s column (10^3)

Calculated: \`(5 * 1000) + (4 * 100) + (2 * 10) + (3 * 1) = 5423\`

## What is the Binary System (Base-2)?

The binary system uses only 2 unique digits (0 and 1). The position of each digit represents a power of 2.

*Example: 1011 in binary*
*   1 is in the 1s column (2^0)
*   1 is in the 2s column (2^1)
*   0 is in the 4s column (2^2)
*   1 is in the 8s column (2^3)

Calculated: \`(1 * 8) + (0 * 4) + (1 * 2) + (1 * 1) = 11\` (in decimal)

## Converting Between Bases

### Decimal to Binary

To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainders. Read the remainders from bottom to top.

<FormulaBlock 
  title="Decimal to Binary Method"
  formula="Divide by 2, keep the remainder"
  variables={[]}
  example="Convert 13 to binary: 13/2 = 6 (R=1), 6/2 = 3 (R=0), 3/2 = 1 (R=1), 1/2 = 0 (R=1). Reading backwards: 1101."
/>

### Hexadecimal (Base-16)

Binary strings get very long very quickly. Developers often use Hexadecimal (Base-16) to make binary easier to read. One hex digit exactly maps to four binary digits (a nibble).

*   \`1111\` in binary = \`F\` in Hex = \`15\` in Decimal.

## Practical Uses for Developers

Understanding numeral systems is crucial for:
- Bitwise operations
- Managing IP addresses (IPv4 & IPv6)
- Understanding color codes in CSS (e.g., #FFFFFF)
- Low-level memory management

<CalculatorEmbed id="numeral-system" />
    `
  },
  {
    id: "post-4",
    slug: "percentage-formula-explained",
    title: "Percentage Formula Explained: A Complete Guide",
    excerpt: "Learn how to calculate percentages with simple formulas, real-world examples, and step-by-step math breakdowns for discounts, growth, and margins.",
    category: "Math & Formulas",
    readTime: "7 min read",
    date: "2024-02-18",
    author: authors.alex,
    featuredImage: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=1000",
    relatedCalculators: [
      { name: "Percentage Calculator", url: "/calculators/percentage" },
      { name: "Discount Calculator", url: "/calculators/discount" },
      { name: "GST Calculator", url: "/calculators/gst" }
    ],
    faqs: [
      { question: "What does percent mean?", answer: "Percent comes from the Latin 'per centum', which means 'by the hundred'. It represents a fractional amount out of 100." },
      { question: "How do I calculate a 20% discount?", answer: "Multiply the original price by 0.20 to find the discount amount, then subtract that from the original price. Alternatively, multiply the original price by 0.80 to directly get the final price." },
      { question: "How do I calculate percentage growth or increase?", answer: "Subtract the old value from the new value, divide the result by the old value, and then multiply by 100." }
    ],
    content: `
A percentage is simply a way of expressing a number as a fraction of 100. It is often denoted using the percent sign, "%". Whether you're calculating a discount at a store, figuring out your profit margin, or analyzing data growth, percentages are everywhere.

## Basic Percentage Formula

The most fundamental formula for calculating a percentage is finding what part one number is of another.

<FormulaBlock 
  title="Basic Percentage Formula"
  formula="Percentage = ( Part / Whole ) × 100"
  variables={[
    { name: "Part", desc: "The specific amount or subset" },
    { name: "Whole", desc: "The total amount" },
    { name: "Percentage", desc: "The resulting percentage value" }
  ]}
  example="If you scored 45 out of 50 on a test: (45 / 50) * 100 = 0.9 * 100 = 90%. You scored 90%."
/>

## Finding 'X% of Y'

Often, you know the percentage and the total, and you need to find the specific part.

<FormulaBlock 
  title="Percentage of a Number"
  formula="Part = ( Percentage / 100 ) × Whole"
  variables={[
    { name: "Percentage", desc: "The percent value you want to find" },
    { name: "Whole", desc: "The total amount" }
  ]}
  example="What is 15% of $200? (15 / 100) * 200 = 0.15 * 200 = $30."
/>

<CalculatorEmbed id="percentage" />

## Percentage Increase and Decrease

These formulas are crucial in finance, business, and daily life to measure growth, inflation, or discounts.

### Percentage Increase (Growth)

Use this when a value goes up and you want to know by what percent.

<FormulaBlock 
  title="Percentage Increase"
  formula="% Increase = [ (New Value - Old Value) / Old Value ] × 100"
  variables={[
    { name: "New Value", desc: "The larger, increased value" },
    { name: "Old Value", desc: "The original, smaller value" }
  ]}
  example="Your stock portfolio grew from $5,000 to $6,000. Increase = ((6000 - 5000) / 5000) * 100 = (1000 / 5000) * 100 = 20%. Your portfolio grew 20%."
/>

### Percentage Decrease (Discounts, Depreciation)

Use this when a value goes down. It's the same formula structure, but you subtract the new value from the old value to get a positive number.

<FormulaBlock 
  title="Percentage Decrease"
  formula="% Decrease = [ (Old Value - New Value) / Old Value ] × 100"
  variables={[
    { name: "Old Value", desc: "The original, larger value" },
    { name: "New Value", desc: "The smaller, decreased value" }
  ]}
  example="A TV's price dropped from $800 to $600. Decrease = ((800 - 600) / 800) * 100 = (200 / 800) * 100 = 25%. The TV was discounted by 25%."
/>

<CalculatorEmbed id="discount" />

## Practical Tips for Mental Math

1. **Finding 10%**: Move the decimal point one place to the left. (10% of 450 is 45)
2. **Finding 1%**: Move the decimal point two places to the left. (1% of 450 is 4.5)
3. **Reversibility Trick**: X% of Y is always equal to Y% of X. 
   *Example: What is 4% of 50? That sounds hard. Flip it: What is 50% of 4? Easy, it's 2! Therefore, 4% of 50 is also 2.*

## Conclusion

Mastering percentage formulas is essential for basic financial literacy. From calculating tips to understanding interest rates, knowing the math behind the percent sign empowers you in everyday transactions.
    `
  }
];
