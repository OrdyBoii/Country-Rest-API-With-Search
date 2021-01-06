import { useRouter } from "next/router";

const Country = () => {
  const router = useRouter();
  const { cid } = router.query;

  return (
    <p>
      This is where the countries data will go
    </p>
  );
};

export default Country;
