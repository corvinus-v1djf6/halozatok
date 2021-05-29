using HajosTeszt.FilmekModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/filmek")]
    [ApiController]
    public class FilmController : ControllerBase
    {
       
        // filmek tábla rekordjainak száma
        // GET: api/filmek/count
        [HttpGet("count")]
        public int M1()
        {
            beadando_filmekContext context = new beadando_filmekContext();
            int filmekSzáma = context.Filmeks.Count();
            return filmekSzáma;
        }

        // filmek tábla teljes tartalmának listázása
        // GET: api/filmek
        [HttpGet]
        public IEnumerable<Filmek> Get()
        {
            beadando_filmekContext context = new beadando_filmekContext();
            return context.Filmeks.ToList();
        }

        // egy rekord lekérdezésére kulcs alapján
        // GET api/filmek/3
        [HttpGet("{id}")]
        public Filmek Get(int id)
        {
            beadando_filmekContext context = new beadando_filmekContext();
            var keresettFilm = (from x in context.Filmeks
                                where x.FilmekId == id
                               select x).FirstOrDefault();
            return keresettFilm;
        }

        // új rekord rögzítésére
        // POST api/filmek
        [HttpPost]
        public void Post([FromBody] Filmek újFilm)
        {
            beadando_filmekContext context = new beadando_filmekContext();
            context.Filmeks.Add(újFilm);
            context.SaveChanges();
        }

        // PUT api/<FilmController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // rekord törlésére
        // DELETE api/<FilmController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            beadando_filmekContext context = new beadando_filmekContext();
            var törlendőfilm = (from x in context.Filmeks
                                where x.FilmekId == id
                                select x).FirstOrDefault();
            context.Remove(törlendőfilm);
            context.SaveChanges();
        }
    }
}
