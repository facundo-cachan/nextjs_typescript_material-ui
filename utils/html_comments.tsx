export default function htmlComments({ children }: any) {
  return (
    <>
      <span
        className="htmlComment"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${children} -->`,
        }}
      />
      <style jsx>{`
        .htmlComment {
          margin: 0px;
        }
      `}</style>
    </>
  );
}
