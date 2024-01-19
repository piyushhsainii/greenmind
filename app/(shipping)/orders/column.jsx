 export  const columns = [
            {
        accessorKey:"id",
        header:'id'
            },
            {
        accessorKey:"amount",
        header:'amount'
            },
            {
        accessorKey:"email",
        header:'email'
            },
            {
        accessorKey:"status",
        header:'Status'
            },
        // {
        //   accessorKey: "amount",
        //   header: () => <div className="text-right">Amount</div>,
        //   cell: ({ row }) => {
        //     const amount = parseFloat(row.getValue("amount"));
        //     const formatted = new Intl.NumberFormat("Inr", {
        //       style: "currency",
        //       currency: "USD",
        //     }).format(amount);
      
        //     return <div className="text-right font-medium">{formatted}</div>;
        //   },
        // },
      ];

  