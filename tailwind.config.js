/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
    fontFamily: {
      'MonoLisa': ['MonoLisa'],
      'Mona': ['Mona Sans","Mona Sans Fallback",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol'],
      'Ui': ['ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace'],
     },
     extend: {},
   },
   variants: {},
   plugins: [],
 }
