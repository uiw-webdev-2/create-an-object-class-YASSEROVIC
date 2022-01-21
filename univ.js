/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class univ {
  constructor(
    // Defines parameters:
    country,
    state,
    city,
    univName,
    years,
    link,
  ) {
    // Define properties:
    this.country = country;
    this.state = state;
    this.city = city;
    this.years = years;
    this.univName = univName;
    this.link = link;
  }

}

export default univ;