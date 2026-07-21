const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@novamac.com';
  const password = await bcrypt.hash('admin123', 10);
  
  const existingUser = await prisma.user.findUnique({ where: { email } });
  
  if (!existingUser) {
    await prisma.user.create({
      data: {
        name: 'Admin',
        email,
        password,
        role: 'ADMIN',
      },
    });
    console.log('Admin user created: admin@novamac.com / admin123');
  } else {
    console.log('Admin user already exists');
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
