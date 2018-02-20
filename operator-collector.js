let sphereRadius = 3; //in centimeters
const volumeOfSphere = (sphereRadius) => {
	return (4/3) * 3.14 * sphereRadius * sphereRadius
	* sphereRadius;
};
// sphere volume equation
const areaOfSphere = (sphereRadius) => {
	return 3.14 * sphereRadius * sphereRadius * 4;};
// sphere area equation
console.log('The volume of this sphere is ' + 
	volumeOfSphere(sphereRadius) + ' cubic centimeters ' + 
	' and the surface area is ' + areaOfSphere(sphereRadius) + 
	' square centimeters ');
// the volume of a sphere in cubic units = 
// the surface area of a sphere in square units

