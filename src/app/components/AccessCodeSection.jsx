export default function AccessCodeSection() {
  return (
    <>
      <section className="access-code-section">
        <div className="access-code-section-main">
          <div className="access-code-paragraph-container">
            <p className="access-code-paragraph">Ready to take a test?</p>
            <p className="access-code-sub-paragraph">
              No need for registration. Simply enter your access code to begin.
            </p>
          </div>
          <form className="access-code-input-container">
            <input
              placeholder="Enter the access code"
              type="text"
              className="access-code-input"
            />
            <button className="start-test-button">Start your test</button>
          </form>
        </div>
      </section>
    </>
  );
}
