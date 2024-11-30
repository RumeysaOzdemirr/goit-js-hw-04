//Görev 3. Oyuncu Profili

const profile = {  
    username: "Jacob",  
    playTime: 300,  

    // Kullanıcı adını değiştiren metod  
    changeUsername(newName) {  
        this.username = newName; // username özelliğini yeni değerle değiştir  
    },  

    // Oyun süresini güncelleyen metod  
    updatePlayTime(hours) {  
        this.playTime += hours; // playTime özelliğini belirtilen saat kadar artır  
    },  

    // Kullanıcı bilgilerini döndüren metod  
    getInfo() {  
        return `${this.username} has ${this.playTime} active hours!`; // Bilgiyi formatlı bir şekilde döndür  
    }  
};  

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
