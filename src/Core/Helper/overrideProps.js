const overridedProps = {
   shouldForwardProp: (prop) => !prop.startsWith('$')
};

export default overridedProps;