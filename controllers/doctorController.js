const doctors = [
    {
      id: 1,
      name: "Doctor Name 1",
      availblDate: ["2024-03-07T04:16:52.837Z", "2024-03-07T06:16:52.837Z"],
    },
    {
      id: 2,
      name: "Doctor Name 2",
      availblDate: ["2024-03-07T08:16:52.837Z", "2024-03-07T09:16:52.837Z"],
    },
  ];
  
  const appoint = [{ id: 1, doctorID: 1, slot: "2024-03-07T10:16:52.837Z" }];
  
exports.getAvailbleDoctor = async (req,res)=>{
    try {
        const { date, time } = req.query;
        const availblDOctors = doctors.filter((doctor) => {
          const drAppointment = appoint.filter(
            (appoint) => appoint.doctorID === doctor.id
          );
          return drAppointment.some((appoint) => appoint.slot === `${date}${time}`);
        });
        res.json(availblDOctors);
    } catch (error) {
        console.log(error)
    }
}
