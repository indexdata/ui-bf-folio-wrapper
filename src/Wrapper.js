import { App } from 'marva-next';

const Wrapper = (props) => {
  // TODO: purge localStorage

  return (
    <div id="editor-root" style={{ margin: '1em' }}>
      <div>Wrapper</div>
      <App routePrefix="/marva" okapi={props.stripes.okapi} />
    </div>
  );
};

export default Wrapper;
