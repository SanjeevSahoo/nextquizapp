const USER_LIST = [
  {
    id: "1",
    user_name: "Sanjeev Sahoo",
    email_id: "sanjeevs.ttl",
    domain_id: "sanjeevs.ttl",
    password: "admin123",
    roles: "['Admin','Participants']",
    org_id: "1",
    loc_id: "1",
    dept_id: "1",
    status: "Active",
  },
  {
    id: "2",
    user_name: "Krishna Singh",
    email_id: "krishnas.ttl",
    domain_id: "krishnas.ttl",
    password: "admin123",
    roles: "['Participants']",
    org_id: "1",
    loc_id: "1",
    dept_id: "1",
    status: "Active",
  },
];

const NEXT_PUBLIC_SOCKET_SERVER_URL:string = process.env.NEXT_PUBLIC_SOCKET_SERVER_URL||"http://localhost:4000";


export { USER_LIST ,NEXT_PUBLIC_SOCKET_SERVER_URL};
