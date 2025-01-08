// Yaroqli (IPv4) IP berilgan bo'lsa address, o'sha IP manzilning himoyalangan versiyasini qaytaring.
// Defanglangan IP manzil har  bir davrni "."bilan almashtiradi "[.]".

// 1-misol:

// Kirish: manzil = "1.1.1.1"
//  Chiqish: "1[.]1[.]1[.]1"


// 2-misol:

// Kirish: manzil = "255.100.50.0"
//  Chiqish: "255[.]100[.]50[.]0"


////////////////////////////////////   ////////////////////////////
             //   Javbolar //

        var defangIPaddr = function(address) {
            return   address.split('.').join("[.]")
        };    
        
        console.log(defangIPaddr("1.1.1.1"));