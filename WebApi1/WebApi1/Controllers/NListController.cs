﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi1.Models;

namespace WebApi1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NListController : ControllerBase
    {
        private readonly NewsDBContext _context;

        public NListController(NewsDBContext context)
        {
            _context = context;
        }

        // GET: api/NList
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NList>>> GetNLists()
        {
            return await _context.NLists.ToListAsync();
        }

        // GET: api/NList/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NList>> GetNList(int id)
        {
            var nList = await _context.NLists.FindAsync(id);

            if (nList == null)
            {
                return NotFound();
            }

            return nList;
        }

        // PUT: api/NList/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNList(int id, NList nList)
        {
            //if (id != nlist.id)
            //{
            //    return badrequest();
            //}

            _context.Entry(nList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NListExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/NList
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<NList>> PostNList(NList nList)
        {
            _context.NLists.Add(nList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNList", new { id = nList.id }, nList);
        }

        // DELETE: api/NList/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<NList>> DeleteNList(int id)
        {
            var nList = await _context.NLists.FindAsync(id);
            if (nList == null)
            {
                return NotFound();
            }

            _context.NLists.Remove(nList);
            await _context.SaveChangesAsync();

            return nList;
        }

        private bool NListExists(int id)
        {
            return _context.NLists.Any(e => e.id == id);
        }
    }
}
