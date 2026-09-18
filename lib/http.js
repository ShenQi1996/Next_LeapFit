export const writeBody = (res, body, contentType) => {
  res.setHeader('Content-Type', contentType);
  res.write(body);
  res.end();
  return { props: {} };
};
