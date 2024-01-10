let cardData: any;
const { faker } = require('@faker-js/faker');



function getOtherSkills(){
  let someSkills = [];
  for (let i = 0; i < 3; i++) {
    someSkills.push(faker.person.jobDescriptor());
  }
  return someSkills;
}

function generateData(){
console.log('hi')
for (let i = 0; i < 100; i++) {
  const randomName = faker.person.fullName();
  const jobTitle = faker.person.jobTitle();
  const otherSkills = getOtherSkills();
  const experience = faker.number.int({ min: 1, max: 40 });
  cardData += `
  <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://xsgames.co/randomusers/assets/avatars/pixel/${i}.jpg" alt=""></img>
  <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${jobTitle}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${randomName }</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Experience: ${experience} years</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Other Skills: ${otherSkills}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Methods of Communication: Facetime, phone, email, zoom</p>

  </div>
</a>
  `

}
}
export const randomData = generateData()
