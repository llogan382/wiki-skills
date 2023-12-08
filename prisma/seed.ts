import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()
async function manual() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      skills: {
        create: {
          title: 'japanese gardening',
        },
      },
    },
  })
}

async function createRandomUser(i: number): Promise<any> {

  const userId =  i;
  const name =  faker.person.fullName();
  const email = faker.internet.email();
  const skills = faker.person.jobType();

  const createdUser =     prisma.user.upsert({
    where: { id: userId },
    update: {},
    create: {
      email: email,
      name: name,
      skills: {

        create: {
          title: skills,
        },
      }
    },
  })
  return(
    createdUser



  );
}


  let i = 0;
while (i < 100) {
  createRandomUser(i)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e: Error) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  i++
}




// main()
//   .then(async() => {
//     await manual()
//   })
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e: Error) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
