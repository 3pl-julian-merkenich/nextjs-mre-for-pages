export async function getServerSideProps() {
  return {};
}

export const config = { runtime: 'experimental-edge' };

export default function ErrorPage() {
  return <div>ERROR</div>;
}
