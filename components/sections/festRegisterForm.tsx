import React from "react"

const Footer = () => {
	return (
		<div className="pt-12 pb-4 mx-auto flex items-center justify-center" id="register">
			{/*<div className="max-w-xl min-w-xl">*/}
			{/*	<iframe src="http://localhost:4200" width={600} height={930}></iframe>*/}
			{/*</div>*/}
			<div className="i-container">
				<iframe className="responsive-iframe w-screen"  height={1400} src="https://sparkling-speculoos-133cff.netlify.app/"></iframe>
			</div>
		</div>
	)
}

export default Footer
