import { FC, ReactNode } from "react";

interface Props {
	children: ReactNode
}

export const GreyLayout: FC<Props> = ({ children }) => {
  return (
		<div
			style={{
				backgroundColor: "#333",
				padding: "10px",
				borderRadius: "5px"
			}}
		>
			<h3>Dark-Layout</h3>
			<div>
				{children}
			</div>
		</div>
	)
}