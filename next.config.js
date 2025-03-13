module.exports = {
  env: {
    // Add any logic you want here, returning `true` to enable password protect.
    PASSWORD_PROTECT: true,
	MAINTENANCE_MODE: false,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/code-samples',
        destination: 'https://docs.google.com/document/d/1F7Xmob4Jh8ImSJ9EataWQ7xxaf8bIx4cs6jWiF7IfBw/edit#heading=h.hnwatklyy346',
        permanent: true, // Use true for 301 redirects or false for 302 redirects
      },
	  {
        source: '/resume',
        destination: 'https://wp.zacharyrener.com/wp-content/uploads/2025/03/ZachRener_Resume_3_12_25_01.pdf',
        permanent: true, 
      },
	  {
        source: '/resume/wordpress',
        destination: 'https://wp.zacharyrener.com/wp-content/uploads/2025/03/ZachRener_Resume_3_12_25_01.pdf',
        permanent: true, 
      },
	  {
        source: '/resume/frontend',
        destination: 'https://docs.google.com/document/d/1H08kIYpkTfxcqDzgrUprFfa4UZgb8rgYmWXFpO1wQjY/edit?usp=sharing',
        permanent: true, 
      },
    ];
  },
}
