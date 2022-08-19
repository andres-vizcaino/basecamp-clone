import Button from '@components/Button'
import { useAuth } from 'context/auth.context';
import { NextApplicationPage } from 'types/NextapplicationPage';

// const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
const Home: NextApplicationPage = () => {
  const { logout, user } = useAuth();

  return (
    <>
      <h1>Home</h1>
      <h3>Bienvenido, {user?.profile?.name}</h3>
      <Button onClick={logout}>Cerrar sesión</Button>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(context.req.cookies)
//   const data = await res.json()

//   return {
//     props: {
//       data,
//     },
//   }
// }

Home.requireAuth = true

export default Home