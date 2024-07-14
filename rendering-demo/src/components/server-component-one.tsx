import { ServerComponentTwo } from './server-component-two';

export function ServerComponentOne() {
  return (
    <>
      <div>server-component-one</div>
      <ServerComponentTwo />
    </>
  );
};
