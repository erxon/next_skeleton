import { run } from "./db-connect";

const dbConnect = async () => {
  const result = await run();
  return result;
};

dbConnect().then((result) => {
    console.log(result);
});

export default function fetchUser(){
    
}
