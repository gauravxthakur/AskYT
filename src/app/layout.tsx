import HomePage from "./page"

export default function RootLayout({children}){
  return(
    <html>
      <head>
		    <title>AskYT</title>
	    </head>
	    <body>
		    <main>
          {children}
        </main>
	    </body>
    </html>
  )
}