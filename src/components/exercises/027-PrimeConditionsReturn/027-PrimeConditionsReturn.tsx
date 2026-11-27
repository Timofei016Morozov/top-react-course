function PrimeConditionsReturn() {
  let text;
	const isAdmin = true;
	
	if (isAdmin) {
		text = <p>S</p>;
	} else {
		text = <p>SS</p>;
	}
	
	return text;
}
export default PrimeConditionsReturn;