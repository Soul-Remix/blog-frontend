import './comment-form.css';

const CommentForm = ({
  userName,
  description,
  onInputChange,
  userNameError,
  descriptionError,
}) => {
  return (
    <form>
      <div className="input">
        <label htmlFor="userName">
          Name:<span className="required">*</span>
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Name"
          required
          value={userName}
          onChange={onInputChange}
          className={userNameError ? 'invalid' : ''}
        />
        {userNameError && <p className="required">{userNameError}</p>}
      </div>
      <div className="input">
        <label htmlFor="description">
          Comment:<span className="required">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Comment"
          required
          value={description}
          onChange={onInputChange}
          className={descriptionError ? 'invalid' : ''}
        ></textarea>
        {descriptionError && <p className="required">{descriptionError}</p>}
      </div>
      <button
        type="submit"
        className={
          descriptionError || userNameError
            ? 'submit-btn disabled-btn'
            : 'submit-btn'
        }
        disabled={descriptionError || userNameError ? true : false}
      >
        Submit comment
      </button>
    </form>
  );
};

export default CommentForm;
