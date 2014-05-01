window.onload = function()
{
	inicio();
}

function inicio()
{

	function movimiento(path, obj, vel)
    {
        var pathLength = path.getTotalLength();
        var tween = new TWEEN.Tween({ length: 0  })
        .to({ length: pathLength }, vel)
        .onUpdate(function()
        {
            var point = path.getPointAtLength(this.length);
            obj.style.webkitTransform = 'translate('+ point.x + 'px,'+ point.y +'px)';
        }).repeat(999999999).start();
        animate = function()
        {
            requestAnimationFrame(animate)
            TWEEN.update()
        }
        animate();
    }
    var tamReal = false;
	var creaLunas = function(objeto, luna)
    {
        var tamanoLuna = luna.tamano;
 
        if(tamReal)
        {
 
            tamanoLuna = Math.round(elSol.tamano * (luna.porcentaje / 100)*50);
 
        }
        objeto.style.width = tamanoLuna + "px";
        objeto.style.height = tamanoLuna + "px";
        objeto.style.backgroundImage = "url('"+luna.imagen+"')";
        objeto.style.backgroundSize = tamanoLuna + "px " + tamanoLuna + "px";
        var margen = (Math.round(tamanoLuna / 2)) * -1;
        objeto.style.marginTop = margen + "px";
        objeto.style.marginLeft = margen + "px";
        objeto.style.borderRadius = "50%";
        objeto.style.position = "absolute";
 
    }
	var lunas = [
                {nombre: "calisto", 
                 imagen: "https://www.dropbox.com/s/ktdzek4vzxon3ku/Callisto.png",
                 porcentaje: 0.06,
                 tamano: 35
                },
                {nombre: "europa", 
                 imagen: "https://www.dropbox.com/s/1m5wzvwlfdnl8dp/europa.png",
                 porcentaje: 0.04,
                 tamano: 30 
                },
                {nombre: "gaminides", 
                 imagen: "https://www.dropbox.com/s/2xegxpvutoc6zxo/gaminides.png",
                 porcentaje: 0.07,
                 tamano: 20 
                },
                {nombre: "io", 
                 imagen: "https://www.dropbox.com/s/uwnjhxy0xki2fhf/io.png",
                 porcentaje: 0.05,
                 tamano: 15 
                }
               ];
    var objeto = "";
    var ruta = "";
    var velInicia = 60000;
    for(var i = 1; i <= 4; i++)
    {
    	objeto = nom_div("objeto_" + i);
    	ruta = nom_div("svg_" + i);
    	creaLunas(objeto, lunas[i - 1]);
    	movimiento(ruta, objeto, velInicia);
    	velInicia += 4000;
    }
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}
