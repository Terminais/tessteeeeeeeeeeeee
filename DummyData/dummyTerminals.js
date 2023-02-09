let dummyTerminals = {
    
    "PolarCaps/users/Yussuma":{
        terminal_name: "NOME DO TERMINAL",
        location:"LOCALIZAÇÃO",
        header:`Bem Vindo à ROBCO Industries (TM) Termlink -LUGAR- <user:USUARIO>`,
        page_0: {
            prompt:`Bem Vindo de Volta`,
            userOptions:[{text:"[LOGS]",route:"page_1"},{text:"[MAIL]",route:"page_4"},{text:"[CONTROL SAFE]",route:"page_8"},]
        },
        page_1: {
            prompt:`-LOGS-`,
            userOptions:[{text:"PolarCaps",route:"page_2"},{text:"Forklift Position",route:"page_3"},{text:"[voltar]",route:"page_0"},]
        },
        page_2: {
            prompt:`    Based in Worcester, Massachusetts, PolarCaps Beverages has remained a beloved hometown favorite while growing into a national cult favorite. As consumer tastes have evolved so has PolarCaps Beverages’ ability to innovate and meet the growing demand for sparkling refreshment. From their heritage recipes, such as PolarCaps Orange Dry and Birch Beer, to the playful introduction of modern seasonal PolarCaps Seltzers, the people of PolarCaps Beverages continue to love what they do and work hard to uphold the values of its founder.`,
            userOptions:[{text:"[voltar]",route:"page_1"}]
        },        
        page_3: {
            prompt:
`Overview: Move product by loading and unloading trailers
Responsibilities:
    •Stripping down bottle trailers for production
    •Stripping down PolarCaps trailers so they can be loaded•
    •Deliver bottles to production line
    •Stacking cases on pallets
    •Notify supervisor of wet or damaged cases
    •Product rotation•
    •Check case codes and shrink wrap
    •Promote cleanliness in areas
                  
Minimum Requirements:
    •Forklift Operator training and certification
    •Ability to lift 50 lbs. or more
    •Forklift Operator training and certification
    •Ability to lift 50 lbs. or more`,
            userOptions:[{text:"[voltar]",route:"page_1"}]
        },
        page_4: {
            prompt:"-MAIL-",
            userOptions:[{text:"from:Duane, 7/13/2074",route:"page_5"},{text:"to:Duane, 7/14/2074",route:"page_6"},{text:"from:Julie, 7/14/2074",route:"page_7"},{text:"[voltar]",route:"page_0"}]
        },
        page_5: {
            prompt:`Mike, You made me look like an idiot today at todays meeting. Why cant you finish your work? I better not lose my jopb over this!`,
            userOptions:[{text:"[voltar]",route:"page_4"}]
        },
        page_6: {
            prompt:`Look Duane, i'm sorry. IU have this handled. You are going to be fine. I'm going to hae a chat with HR`,
            userOptions:[{text:"[voltar]",route:"page_4"}]
        },
        page_7: {
            prompt:"Hey Mike. About last night. Can we talk?",
            userOptions:[{text:"[voltar]",route:"page_4"}]
        },        
        page_8: {
            prompt:"-CONTROL SAFE-",
            userOptions:[{text:"[Disengage Lock]",route:"page_0"}]
        },

     }, 
    
}
export default dummyTerminals;