let car =
{
    znacka:"Aston Martin",
    nadrz: 90,
    spotrebenasto: 0.05,
    celkemUjeto:0,
    dojezd:  1500,
    
    
    
    
    vypoctiSpotrebuAuta(km)
    {
       vypocti =  km * this.spotrebenasto
        
        console.log(` ${vypocti}`);
    },

    jed(km)
    {
        if(0 < (km * this.spotrebenasto) - this.nadrz  )
        {
            console.log(`Nemáš dostatek paliva`);
        }
        else
        {
            this.nadrz = this.nadrz - (km * this.spotrebenasto);
            this.celkemUjeto = km + this.celkemUjeto;
            console.log(`Ujel jsi ${km} v nadrzi zbyva ${this.nadrz} Celkem bylo ujeto ${this.celkemUjeto} `);
            
            this.dojezd = this.nadrz / this.spotrebenasto;
        }
        
        
        
        
        
        
    },

    
        
    

   

    tankuj(tankuju)
    {
        if(this.nadrz < 90)
        {
            if(this.nadrz + tankuju > 90)
            {
                this.nadrz = 90;
        console.log(`Natankoval jsi 65 L aktuálně máš v nádrži MAXIMUM`);
            }
            else
            {
                this.nadrz = this.nadrz + tankuju;
                console.log(`Natankoval jsi ${tankuju} aktuálně máš v nádrži ${this.nadrz }`);  
            }
            
            }
        else
        {
            console.log(`Máš plnou nádrž`)
        }

        this.dojezd = this.nadrz / this.spotrebenasto;
        
    },


    vypisStav()
    {
        console.log(
            `
            STATUS:
            Ujeté KM: ${this.celkemUjeto} KM
            Nádrž: ${this.nadrz} L
            Dojezd: ${this.dojezd} KM
            Spotřeba:${this.spotrebenasto * 100}L/100KM`
        )
    }

    

    
}


