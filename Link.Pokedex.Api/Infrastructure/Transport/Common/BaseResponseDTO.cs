using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Link.Pokedex.Api.Infrastructure.Transport.Common
{
    public class BaseResponseDTO
    {
        public bool Error { get; set; } = false;
        public int? CodigoError { get; set; }
        public string TipoError { get; set; }
        public string MensajeError { get; set; }
    }
}
