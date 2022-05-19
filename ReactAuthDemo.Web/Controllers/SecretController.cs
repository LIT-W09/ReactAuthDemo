using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactAuthDemo.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecretController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        [Route("getvalue")]
        public object GetSecretValue()
        {
            return new { value = new Random().Next(1, 10000) };
        }
    }
}
