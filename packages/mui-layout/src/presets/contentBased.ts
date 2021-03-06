import LayoutBuilder from '../builders';

export default () => {
  const scheme = LayoutBuilder();

  scheme.configureHeader(builder => {
    builder.registerConfig('xs', {
      position: 'relative',
      clipped: false,
    });
  });

  scheme.configureEdgeSidebar(builder => {
    builder
      .create('primarySidebar', {
        anchor: 'left',
      })
      .registerTemporaryConfig('xs', {
        width: 256,
      })
      .registerPersistentConfig('sm', {
        persistentBehavior: 'flexible',
        width: 256,
        collapsible: false,
      });
  });
  return scheme;
};
