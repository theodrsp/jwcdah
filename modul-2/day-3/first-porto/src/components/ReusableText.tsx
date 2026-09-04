interface UserIdentityProps {
  name: string;
  age: number;
}

export default function ReusableText({ name, age }: UserIdentityProps) {
  return (
    <div
      style={{
        border: 1,
        borderRadius: 5,
        padding: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: 5,
        backgroundColor: "blue",
        color: "white",
        marginTop: 5,
      }}
    >
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}
