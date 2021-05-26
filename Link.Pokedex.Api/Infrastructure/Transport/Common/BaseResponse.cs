using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Link.Pokedex.Api.Infrastructure.Transport.Common
{
    public class BaseResponse
    {
        public BaseResponse()
        {
            StateResponse = new BaseResponseDTO();
        }
        public BaseResponseDTO StateResponse { get; set; }
    }
}
