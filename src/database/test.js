const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
  proffyValue = {
    name: "Stefan Fugmann",
    avatar: "https://avatars1.githubusercontent.com/u/50536387?s=460&u=d3f4c286b5237b58f26bc3e395fb7f66f74be8ed&v=4",
    whatsapp: "2199995666",
    bio: "Desenvolvedor de serviços de integração, integrando o integravel por muitas integrações. Estou ancioso para te integração nessa integração.",

  }

  classValue = {
    subject: 1,
    cost: "30",

  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  //await createProffy(db, {proffyValue, classValue, classScheduleValues})
  
  const selectedProffys = await db.all("SELECT * FROM proffys")
  //console.log(selectedProffys)

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  //console.log(selectClassesAndProffys)

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <="520"
    AND class_schedule.time_to > "520" 
  `)
  console.log(selectClassesSchedules)

})