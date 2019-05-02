import styled from "styled-components";

export default styled.div`
	&& {
		width: 800px;
		margin: 0 auto;
		font-size: 2em;
		@media (max-width: 700px) {
			font-size: 5em;
		}
	}
`;
