using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HajosTeszt.Models;

namespace EmptyBoat.Controllers
{
    //Commentbe vele!
    //[Route("api/[controller]")]
    [ApiController]
    public class TesztController : ControllerBase
    {
        [HttpGet]
        [Route("corvinus/szerverido")]
        public IActionResult M3()
        {
            string pontosIdő = DateTime.Now.ToShortTimeString();

            return new ContentResult
            {
                ContentType = System.Net.Mime.MediaTypeNames.Text.Plain, //"text/plain"
                Content = pontosIdő
            };
        }

        //[HttpGet] NEM KELL
        [Route("corvinus/nagybetus/{szoveg}")]
        public IActionResult M5(string szoveg)
        {
            return new ContentResult
            {
                ContentType = System.Net.Mime.MediaTypeNames.Text.Plain, //"text/plain"
                Content = szoveg.ToUpper()
            };
            //return BadRequest("Nem jó a bemenő adat");
        }

        //[HttpGet] NEM KELL
        [Route("questions/count")]
        public int M4() //Tetszőleges metódusnév
        {
            hajostesztContext context = new hajostesztContext();
            int kérdésekSzáma = context.Questions.Count();

            return kérdésekSzáma;
        }
    }
}
