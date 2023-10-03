let langCode = window.prompt("Enter the language code (es/de/en/fr) : ")

if(langCode == "es"){
    document.write("Hello World translated in Spanish is: Hola Mundo")
}else if(langCode == "de"){
    document.write("Hello World translated in German is: Hallo Welt")
}else if(langCode == "fr"){
    document.write("Hello World translated in French is: Bonjour le monde")
}else{
    document.write("Hello World : English")
}