var a
var factorySprite,factoryImage, donutShop,dounutShop_img, groceryShop,groceryShopImg,textSprite,frame,woodcount,storageSprite;
var simcash=200
var cityRank=0
var gamestate=0
var cityStorage=60
var ironCount=0
var maxStorage=60
var factoryButton
var factoryArray=[]
var houseSprite;
var color
var t
function setup()

{
    createCanvas(500,500)
    factorySprite=new Factory(200,20)
  //  factoryArray.push(factorySprite)
    storageSprite=createSprite(140,40,200,50)
    factoryButton=createButton('new factory ');
    factoryButton.position(500,30)
    houseSprite=new house(500,200)
   
   
    //factoryButton.style("hi",col);


}
function preload()
{

}
 function draw()
{
    
    background(255)
    fill("yellow")
    factoryButton.mousePressed(newFactory)
    textSize(32)
    text("simcash: "+simcash,40,40)
    //console.log(frameCount)
    storageSprite.visible=false
    if(mousePressedOver(storageSprite))
    {
        noFill()
        stroke(255,20,147)
        rect(250,250,200,200)
        text("iron: "+ironCount,250,300)
    }
    if(mousePressedOver(factorySprite.body))
    {
        gamestate=1

    }
    if (gamestate===1)
    {
        noFill()
        stroke(0,255,0)
        rect(150,50,350,100)
        textSprite=createSprite(195,120,80,20)
        textSprite2=createSprite(295,120,80,20)
        textSprite.visible=false
        textSprite2.visible=false
        text("iron",160,130)
        text("wood",260,130)
        if(mousePressedOver(textSprite)&&textSprite!=undefined)
        {
            frame=frameCount;
            gamestate=0
            t=0
            
           
        }
        if(mousePressedOver(textSprite2)&&textSprite!=undefined)
        {
            frame=frameCount;
            gamestate=0
            t=1
            
           
        }
        upgradelevel()
        
        
        
    }
    drawSprites()
    text("storage: "+cityStorage,250,40)
    if(frameCount===frame+100)
        {
        console.log("hello")
        if(t===0)
        factorySprite.icount()
      
        }
     if(frameCount===frame+200)
     {
         if(t===1)
         factorySprite.woodcount()
     }

}
function newFactory()
{
   // var flag=0
    //for(i=0;i<=factoryArray.length;i++)
    if(a!=undefined)
    {
     var x1=a.x 
    
    
      factoryArray.push(new Factory(x1+200,a.y));
      a=factoryArray[factoryArray.length-1]
      console.log(a)
    }
    else
    {
       // drawSprites()
       a=factorySprite;
       console.log(a)
     

    }
    //factorySprite.display()
      drawSprites()  

    

    
}

