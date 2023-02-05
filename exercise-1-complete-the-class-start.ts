/**
 * START: Follow the instructions below.
 */

class Currency<CurrencyType> {
  // Add types for these fields and make them private.
  // Hint: Look at the type of values being passed when `new Currency()`
  // is called below.

  private name: CurrencyType;
  private code: CurrencyType;
  private symbol: CurrencyType;

  // Add types to the constructor parameters.

  constructor(name: CurrencyType, code: CurrencyType, symbol: CurrencyType) {
    this.name = name;
    this.code = code;
    this.symbol = symbol;

    // Store the `code` and `symbol` parameter values in
    // their corresponding class fields.
  }

  // Methods are public by default.
  // Add a visibility modifier to make it clear this method is public.
  //
  // Add a return type for this method
  // Hint: Look at the inferred return type.

  public describe() {
    // Replace the `null` values below with the appropriate field values.
    // Hint: Access field values with: this.fieldName

    let description = `The ${this.name} currency `;
    description += `has the code ${this.code} `;
    description += `and uses the symbol ${this.symbol}.`;

    console.log(description);
  }
}

// ----

const currencyNaira = new Currency<string>("Naira", "NGN", "₦");

console.log(currencyNaira);
currencyNaira.describe();

// Call the `describe()` method on the `currencyNaira` object.

// ----

const currencyUsDollar = new Currency<string>(
  "United States dollar",
  "USD",
  "$"
);

console.log(currencyUsDollar);
currencyUsDollar.describe();
// Call the `describe()` method on the `currencyUsDollar` object.

// ----

export {};
