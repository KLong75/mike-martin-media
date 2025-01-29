export default function IndustrySupport({heading, helperText, supportList}) {
  return (
    <div className="flex flex-col justify-center">
      <h3>{heading}</h3>
      <p>{helperText}</p>
      <ul>
        {supportList.map((item) => (
          <li key={item.heading}>
            <span>{item.heading}</span>
            <br />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};