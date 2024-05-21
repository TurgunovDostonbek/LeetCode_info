//  //////  Savolar ////// 

// Gap - bosh va keyingi bo'shliqlarsiz bitta bo'shliq bilan ajratilgan so'zlar ro'yxati. Har bir so'z faqat katta va kichik ingliz harflaridan iborat (tinish belgilari yo'q).

// Masalan, "Hello World", "HELLO"va "hello world hello world"barcha gaplar.
// sSizga jumla va butun son beriladi k. Siz faqat birinchi so'zlarni o'z ichiga olgan holda qisqartirishni xohlaysiz . Kesilgandan keyin qaytaring .s ks 


// Example 1:

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".


////////////////////////////////////   ////////////////////////////
         ////   Javbolar ////////
        var truncateSentence = function(s, k) {
            let a = s.split(' ').slice(0,k).join(" ")
            return a
        };  
        console.log(truncateSentence("Hello how are you Contestant", k = 4));