import SidebarItems from "./SidebarItems";
function Sidebar() {
  const img = "/chair.png";
  const SidebarItemsInof=[
    {
      title:"Pc Gamer",
      table:{
        tableHeader:{
          col1:"PC GAMER INTEL",
          col2:"PC GAMER AM4",
          col3:"PC GAMER AM5"
        },
        tableBody:[
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
        ]
      },
      card:{
        title:"BEST SALE",
        promotion:"22%",
        image:img,
        redTitle:"Setup Game",
        caracters:"AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
        oldPrice:"6,249.00MAD",
        price:"4,849.00MAD"
      }
    },
    {
      title:"Pc Gamer",
      table:{
        tableHeader:{
          col1:"PC GAMER INTEL",
          col2:"PC GAMER AM4",
          col3:"PC GAMER AM5"
        },
        tableBody:[
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
        ]
      },
      card:{
        title:"BEST SALE",
        promotion:"22%",
        image:img,
        redTitle:"Setup Game",
        caracters:"AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
        oldPrice:"6,249.00MAD",
        price:"4,849.00MAD"
      }
    },
    {
      title:"Pc Gamer",
      table:{
        tableHeader:{
          col1:"PC GAMER INTEL",
          col2:"PC GAMER AM4",
          col3:"PC GAMER AM5"
        },
        tableBody:[
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
        ]
      },
      card:{
        title:"BEST SALE",
        promotion:"22%",
        image:img,
        redTitle:"Setup Game",
        caracters:"AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
        oldPrice:"6,249.00MAD",
        price:"4,849.00MAD"
      }
    },
    {
      title:"Pc Gamer",
      table:{
        tableHeader:{
          col1:"PC GAMER INTEL",
          col2:"PC GAMER AM4",
          col3:"PC GAMER AM5"
        },
        tableBody:[
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
        ]
      },
      card:{
        title:"BEST SALE",
        promotion:"22%",
        image:img,
        redTitle:"Setup Game",
        caracters:"AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
        oldPrice:"6,249.00MAD",
        price:"4,849.00MAD"
      }
    },
    {
      title:"Pc Gamer",
      table:{
        tableHeader:{
          col1:"PC GAMER INTEL",
          col2:"PC GAMER AM4",
          col3:"PC GAMER AM5"
        },
        tableBody:[
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
        ]
      },
      card:{
        title:"BEST SALE",
        promotion:"22%",
        image:img,
        redTitle:"Setup Game",
        caracters:"AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
        oldPrice:"6,249.00MAD",
        price:"4,849.00MAD"
      }
    },
    {
      title:"Pc Gamer",
      table:{
        tableHeader:{
          col1:"PC GAMER INTEL",
          col2:"PC GAMER AM4",
          col3:"PC GAMER AM5"
        },
        tableBody:[
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
          {
            col1:"14TH GENERATION",
            col2:"AMD RYZEN 9",
            col3:"AMD RYZEN 9",
          },
        ]
      },
      card:{
        title:"BEST SALE",
        promotion:"22%",
        image:img,
        redTitle:"Setup Game",
        caracters:"AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
        oldPrice:"6,249.00MAD",
        price:"4,849.00MAD"
      }
    },
  ]
  return (
    <div className="z-50 hidden xl:block">
      <div className="flex flex-row relative items-center justify-between">
        {
          SidebarItemsInof.map((item,i)=>(

            <SidebarItems key={i} item={item}/>
          ))
        }
      </div>
    </div>
  );
}

export default Sidebar;
