import React from 'react';
import PropType from 'prop-types';

const Preview = ({ file }) => {
  const [preview, setPreview] = React.useState({ thumb: undefined, loading: false });
  const reader = new FileReader();

  React.useEffect(() => {
    let isMounted = true;
    if (file) {
      if (isMounted) {
        reader.onloadend = () => {
          setPreview({
            thumb: reader.result,
            loading: false,
          });
        };
        reader.readAsDataURL(file);
      }
    }
    return () => {
      isMounted = false;
    };
  }, [file]);

  if (!file) {
    return null;
  }

  if (preview.loading) {
    return <p>loading...</p>;
  }

  return (
    <img src={preview.thumb} alt="preview" />
  );
};

export default Preview;

Preview.propTypes = {
  file: PropType.instanceOf(File).isRequired,
};
